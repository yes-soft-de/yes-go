<?php

namespace App\Repository;

use App\Entity\ProjectEmployeeEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ProjectEmployeeEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjectEmployeeEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjectEmployeeEntity[]    findAll()
 * @method ProjectEmployeeEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectEmployeeEntityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjectEmployeeEntity::class);
    }

    // /**
    //  * @return ProjectEmployeeEntity[] Returns an array of ProjectEmployeeEntity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProjectEmployeeEntity
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
