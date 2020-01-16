<?php

namespace App\Repository;

use App\Entity\EmployeeEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method EmployeeEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method EmployeeEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method EmployeeEntity[]    findAll()
 * @method EmployeeEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EmployeeEntityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EmployeeEntity::class);
    }

    // /**
    //  * @return EmployeeEntity[] Returns an array of EmployeeEntity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EmployeeEntity
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findEmployeeByld($id): EmployeeEntity
    {
        $res= $this->createQueryBuilder('employee')
            ->andWhere('employee.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult()
            ;
        return $res;
    }

    public function findEmployeeProjects($id)
    {
        return $this->createQueryBuilder('employee')
            ->select('project.name ')
            ->from('App:ProjectEmployeeEntity','projectEmployee')
            ->from('App:ProjectEntity','project')
            ->andWhere('projectEmployee.employee=employee.id')
            ->andWhere('projectEmployee.project=project.id')
            ->andWhere('employee.id=:id')
            ->setParameter('id',$id)
            ->getQuery()
            ->getResult();
    }
    public function getAll()
    {
        return $this->createQueryBuilder('employee')
            ->getQuery()
            ->getResult();
    }
}
