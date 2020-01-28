<?php

namespace App\Repository;

use App\Entity\SkillEmployeeEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method SkillEmployeeEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method SkillEmployeeEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method SkillEmployeeEntity[]    findAll()
 * @method SkillEmployeeEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SkillEmployeeEntityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SkillEmployeeEntity::class);
    }

    // /**
    //  * @return SkillEmployeeEntity[] Returns an array of SkillEmployeeEntity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SkillEmployeeEntity
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
